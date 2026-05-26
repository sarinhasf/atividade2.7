import { Message } from "@/types/message";
import { MessageRow } from "./MessageRow";

interface Props {
  messages: Message[];
}

export function MessageTable({ messages }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-white">
        <thead>
          <tr className="text-left border-b border-zinc-700">
            <th className="py-3 px-2 text-xl font-bold">
              Author
            </th>

            <th className="py-3 px-2 text-xl font-bold">
              Message
            </th>

            <th className="py-3 px-2 text-xl font-bold text-right">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {messages.map((msg, index) => (
            <MessageRow
              key={index}
              message={msg}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}