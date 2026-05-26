import { Message } from "@/types/message";

const API_URL = "https://script.google.com/macros/s/AKfycbzBn3sALe1rYjz7Ze-Ik7q9TEVP0I2V3XX7GNcecWP8NvCzGt4yO_RT1OlQp09TE9cU/exec";

export async function fetchMessages(): Promise<Message[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    cache: "no-store",
  });

  const data = await response.json();

  return data.map((item: string[]) => ({
    message: item[0],
    author: item[1],
    date: item[2] || "",
  }));
}