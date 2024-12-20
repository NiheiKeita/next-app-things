import { Meta, StoryObj } from '@storybook/react'
import { DragDropView } from '.'

const meta: Meta<typeof DragDropView> = {
  component: DragDropView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}