import { state } from '@/state'

import { sendMessage } from './__utils'

export const commandRemove = async ({
	idChat,
	idReplyTo,
	value,
}: {
	value: string | undefined
	idChat: number
	idReplyTo: number
}) => {
	if (value && state.recordsFiat[value]) {
		const record = state.recordsFiat[value]
		if (record) {
			record.condition = 'remove'
			await sendMessage({
				idChat,
				idReplyTo,
				message: `✔️ 移除Fiat记录成功!`,
			})
		}
	} else {
		await sendMessage({
			idChat,
			idReplyTo,
			message: `
			❌ 格式错误，正确格式为 移除[移除id, 例:移除1],
			并且id不可大于记录数量。`,
		})
	}
}
