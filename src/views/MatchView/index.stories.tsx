import { Meta, StoryObj } from '@storybook/react'
import { MatchView } from '.'

const meta: Meta<typeof MatchView> = {
  component: MatchView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}