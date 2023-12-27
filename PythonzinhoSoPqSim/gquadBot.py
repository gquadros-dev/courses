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

    async def on_member_join(self, member):
        guild = member.guild
        if guild.system_channel is not None:
            message = f'{member.mention} acabou de entrar no {guild.name}'
            await guild.system_channel.send(message)


intents = discord.Intents.default()
intents.members = True

client = MyClient(intents=intents)
client.run('MTE4NDU3MzQ2NTc0ODA1ODI3Mg.GKLuIa.9HCDBhvCgRwwziyTzag1GZoO9_0L6MZeUxQM-8')
