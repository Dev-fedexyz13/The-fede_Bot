const handler = async (m, { conn, command, isAdmin, isBotAdmin, isGroup}) => {
  if (!isGroup) throw '🌑 𝖤𝗌𝗍𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈 𝗌𝗈𝗅𝗈 𝗉𝗎𝖾𝖽𝖾 𝗎𝗌𝖺𝗋𝗌𝖾 𝖾𝗇 𝗀𝗋𝗎𝗉𝗈𝗌.'
  if (!isAdmin) throw '🚫 𝖲𝗈𝗅𝗈 𝗅𝗈𝗌 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋𝖾𝗌 𝗉𝗎𝖾𝖽𝖾𝗇 𝖾𝗃𝖾𝖼𝗎𝗍𝖺𝗋 𝖾𝗌𝗍𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈.'
  if (!isBotAdmin) throw '⚠️ 𝖭𝖾𝖼𝖾𝗌𝗂𝗍𝗈 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇 𝗉𝖺𝗋𝖺 𝗆𝗈𝖽𝗂𝖿𝗂𝖼𝖺𝗋 𝗅𝖺 𝖼𝗈𝗇𝖿𝗂𝗀𝗎𝗋𝖺𝖼𝗂𝗈́𝗇 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈.'

  const groupId = m.chat
  const accion = command.toLowerCase()

  if (accion === 'cerrar') {
    await conn.groupSettingUpdate(groupId, 'announcement')
    await conn.sendMessage(groupId, {
      text: `🔒 *𝖤𝗅 𝗀𝗋𝗎𝗉𝗈 𝖺 𝗌𝗂𝖽𝗈 𝖼𝖾𝗋𝗋𝖺𝖽𝗈*\n🕷️ 𝖲𝗈𝗅𝗈 𝗅𝗈𝗌 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋𝖾𝗌 𝗉𝗎𝖾𝖽𝖾𝗇 𝖾𝗇𝗏𝗂𝖺𝗋 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌.\n\n🌑 *𝖮𝖻𝗂𝗍𝗈-𝖡𝗈𝗍_𝖬𝖣* 𝖼𝗈𝗇𝗍𝗋𝗈𝗅𝖺 𝗅𝖺 𝗌𝗈𝗆𝖻𝗋𝖺.`,
      mentions: [m.sender]
})
} else if (accion === 'abrir') {
    await conn.groupSettingUpdate(groupId, 'not_announcement')
    await conn.sendMessage(groupId, {
      text: `🔓 *𝖤𝗅 𝗀𝗋𝗎𝗉𝗈 𝖺 𝗌𝗂𝖽𝗈 𝖺𝖻𝗂𝖾𝗋𝗍𝗈*\n💬 𝖳𝗈𝖽𝗈𝗌 𝗅𝗈𝗌 𝗆𝗂𝖾𝗆𝖻𝗋𝗈𝗌 𝗉𝗎𝖾𝖽𝖾𝗇 𝖾𝗇𝗏𝗂𝖺𝗋 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌.\n\n🌑 *𝖮𝖻𝗂𝗍𝗈-𝖡𝗈𝗍_𝖬𝖣* 𝗅𝗂𝖻𝖾𝗋𝖺 𝗅𝖺 𝗏𝗈𝗓 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈.`,
      mentions: [m.sender]
})
} else {
    throw '❗ 𝖢𝗈𝗆𝖺𝗇𝖽𝗈 𝗇𝗈 𝗋𝖾𝖼𝗈𝗇𝗈𝖼𝗂𝖽𝗈. 𝖴𝗌𝖺 *.abrir* 𝗈 *.cerrar*.'
}
}

handler.command = ['abrir', 'cerrar']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
