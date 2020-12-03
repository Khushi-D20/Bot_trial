exports.run = async (client, message, args) => {
      const ydtl = require('ytdl-core')

        const voiceChannel = message.member.voice.channel
        if(!voiceChannel) return message.channel.send ("You need to join a voice channel first dummy.")

        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("I don't have the permissions to join the voice channel :(")
        if(!permissions.has('SPEAK')) return message.channel.send("I don't have the permissions to speak :(")
        try {
          var connection = await voiceChannel.join()

        } catch(error){
          console.log(`There was an error connecting to the voice channel: ${error}`)
          return message.channel.send(`There was an error connecting to the voice channel: ${error}`)

        }
        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish',() => {
          voiceChannel.leave()
        })
        .on('error', () => {
          console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)

      } 
