import { Message } from "@/types/message";

interface Props {
  message: Message;
}

export function MessageRow({ message }: Props) {
  return (
    <tr className="border-b border-zinc-800">
      <td className="py-3 px-2">{message.author}</td>

      <td className="py-3 px-2">{message.message}</td>

      <td className="py-3 px-2 text-right">
        {message.date}
      </td>
    </tr>
  );
}