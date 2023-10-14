import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';

const nodeMappings = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  blockquote: 'blockquote',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  link: (node, i) => (
    <a href={escapeHTML(node.url)} key={i}>
      {serialize(node.children)}
    </a>
  ),
};

function serializeNode(node, i) {
  const mappedNode = nodeMappings[node.type];
  if (typeof mappedNode === 'string') {
    return React.createElement(
      mappedNode,
      { key: i },
      serialize(node.children)
    );
  } else if (typeof mappedNode === 'function') {
    return mappedNode(node, i);
  } else if (node.children.length) {
    return serialize(node.children);
  } else {
    return null;
  }
}

const serialize = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      if (!node.text) return null;

      let text = <p>{escapeHTML(node.text)}</p>;

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    return serializeNode(node, i);
  });

const jsonData = {
  description: [
    {
      children: [
        {
          text: '',
        },
        {
          children: [
            {
              text: 'Entorno',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://platform.bbva.com/codelabs/cells/Cells%20Codelabs/#/cells/Prepare%20your%20Cells%20Environment/Overview/',
        },
        {
          text: '',
        },
      ],
    },
    {
      children: [
        {
          text: '',
        },
      ],
    },
    {
      children: [
        {
          text: 'hola',
        },
      ],
    },
    {
      children: [
        {
          text: '',
        },
      ],
    },
    {
      children: [
        {
          text: 'sfas',
        },
      ],
      type: 'h1',
    },
    {
      children: [
        {
          text: '',
        },
      ],
    },
  ],
};

export function RichText(props) {
  return (
    <article className='prose max-w-none pb-4 [&>hr]:hidden [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:pb-8 [&>ol]:pb-6 [&>p]:pb-6 [&>p]:text-xl md:[&>p]:text-xl [&>p>strong]:bg-yellow-50 [&_a]:text-blue-700 [&_a:hover]:underline [&>ul>li]:list-disc [&>ul]:text-lg md:[&>ul]:text-xl [&>ul]:text-blue-900 [&>ul]:pb-4 [&>ul>li]:ml-5 [&>ul]:space-y-3 [&>pre]:overflow-x-auto  [&>pre]:rounded-xl [&>pre]:text-white [&>pre]:mb-8 [&>pre]:p-8 [&>pre]:bg-slate-800'>
      {serialize(jsonData.description)}
    </article>
  );
}
