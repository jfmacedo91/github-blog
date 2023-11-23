import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { PostContentContainer } from './styles';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        children={ content }
        components={{
          code({ inlist, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inlist && match ? (
              <SyntaxHighlighter
                children={ String(children).replace(/\n$/, "") }
                style={ atomDark }
                customStyle={{
                  backgroundColor: 'transparent'
                }}
                language={ match[1] }
                PreTag="div"
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  )
}