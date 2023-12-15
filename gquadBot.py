import discord 
import os

class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged on as  {self.user}!')

    async def on_message(self, message):
        if message.author == client.user:
            return
        
        if message.content.startswith('$hello'):
            await message.chanel.send('Hello!')

        if message.content == '?regras':
            await message.channel.send(f'{message.author.name.capitalize()} as regras do servidor são:{os.linesep}1 - Não desrespeitar os membros{os.linesep}2 - Regra 2')
        elif message.content == '?nivel':
            await message.author.send('Nível 1')

intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
client.run('MTE4NDU3MzQ2NTc0ODA1ODI3Mg.GO1zCS.-_LOdApgYlaCPO6_EpUmYfWH367-tdyr5bElwY')
