import discord 

client = discord.Client()

@client.event
async def on_ready():
    print(f'We have logged in as {client}')

@client.event 
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('$hello'):
        await message.chanel.send('Hello!')
    
client.run('MTE4NDU3MzQ2NTc0ODA1ODI3Mg.GlEseT.j1OaS8FJhQeJVsEqNyI0cz92_c6Y_snTgYpAQc')
