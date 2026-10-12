'use client';

// React warns when it renders a <script> on the client. The server-rendered
// copy runs during HTML parsing; the client copy is inert text/plain, and
// suppressHydrationWarning accepts the type mismatch.
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
