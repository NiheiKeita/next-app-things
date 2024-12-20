import { Meta, StoryObj } from '@storybook/react'
import { AnimeButton } from '.'

const meta: Meta<typeof AnimeButton> = {
  component: AnimeButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}