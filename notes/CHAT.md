

## 4. Stream Completes, History Saved

When the stream closes:
1. `isLoading` → `false`, animations disappear
2. Full response saved to SQLite via `src/lib/database/chat-history.action.ts` (`saveConversation`)
3. If it's the first message in this chat, the conversation title is set to your first message text
4. Conversation reloaded from the database to keep state consistent

SQLite tables: `conversations` (id, title, timestamps) and `messages` (id, conversation_id, role, content, timestamp).

---

## 5. Starting a New Chat

Triggering "new chat" (shortcut or button):
- Fresh `conversationId` generated
- `conversationHistory` resets to `[]`
- Input and response area clear

Previous chats stay in SQLite and are accessible from the chat history panel. Your next message creates a new conversation row.

---

## 6. Scrolling When the Chat Gets Long

The message area is a `ScrollArea` with a `messagesEndRef` div anchored at the bottom.

`scrollToBottom()` calls `messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })` — fired after your message appears, after each streaming chunk, and after the response finishes.

If `autoScroll` is off in settings, the view won't force-scroll — you can read earlier messages while the response streams in below. You can always scroll up manually; the scroll area is independent of streaming state.

---

## Key Files

| What | Where |
|------|-------|
| Submit + streaming loop | `src/hooks/useChatCompletion.ts` |
| Streaming generator (fetch logic) | `src/lib/functions/ai-response.function.ts` |
| Rust streaming + Tauri events | `src-tauri/src/api.rs` |
| Save / load chat history (SQLite) | `src/lib/database/chat-history.action.ts` |
| System prompts (DB) | `src/lib/database/system-prompt.action.ts` |
| Pluely curated prompts | `src/pages/system-prompts/PluelyPrompts.tsx` |
| Global state (provider, settings) | `src/contexts/app.context.tsx` |
| Response display + scroll area | `src/pages/app/components/completion/Input.tsx` |
| Provider curl templates | `src/config/ai-providers.constants.ts` |
