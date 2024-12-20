import { Meta, StoryObj } from '@storybook/react'
import { OldMatchView } from '.'

const meta: Meta<typeof OldMatchView> = {
  component: OldMatchView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}