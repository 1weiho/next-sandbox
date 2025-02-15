import React from 'react';

function syntaxHighlightReact(jsonStr: string) {
  if (!jsonStr) return null;

  const regex =
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;
  let lastIndex = 0;
  const tokens = [];
  let match;
  let key = 0;

  while ((match = regex.exec(jsonStr)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(jsonStr.slice(lastIndex, match.index));
    }
    const token = match[0];
    let cls = 'number';
    if (/^"/.test(token)) {
      cls = /:$/.test(token) ? 'key' : 'string';
    } else if (/true|false/.test(token)) {
      cls = 'boolean';
    } else if (/null/.test(token)) {
      cls = 'null';
    }
    tokens.push(
      <span key={key++} className={cls}>
        {token}
      </span>,
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < jsonStr.length) {
    tokens.push(jsonStr.slice(lastIndex));
  }

  return tokens;
}

interface HighlightedJSONProps {
  jsonStr: string;
}

export default function HighlightedJSON({ jsonStr }: HighlightedJSONProps) {
  const tokens = syntaxHighlightReact(jsonStr);

  return <pre className="log-content">{tokens}</pre>;
}
