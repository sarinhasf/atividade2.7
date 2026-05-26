"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchMessages } from "@/services/api";

import { Message } from "@/types/message";

import { SearchInput } from "@/components/SearchInput";
import { MessageTable } from "@/components/MessageTable";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState("");

  function formatDate(dateString: string) {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await fetchMessages();

        const formattedMessages: Message[] = data.map((msg: Message) => ({
          ...msg,
          date: formatDate(msg.date),
        }));

        setMessages(formattedMessages);
      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
      }
    }

    loadMessages();
  }, []);

  const filteredMessages = useMemo(() => {
    const term = search.toLowerCase();

    return messages.filter((msg) => {
      const author = String(msg.author || "").toLowerCase();

      const message = String(msg.message || "").toLowerCase();

      const date = String(msg.date || "").toLowerCase();

      return (
        author.includes(term) ||
        message.includes(term) ||
        date.includes(term)
      );
    });
  }, [messages, search]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <SearchInput
          value={search}
          onChange={setSearch}
        />

        <MessageTable messages={filteredMessages} />
      </div>
    </main>
  );
}