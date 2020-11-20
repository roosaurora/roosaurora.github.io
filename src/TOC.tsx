/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useTOCHighlight from "./useTOCHighlight";
import "./TOC.css";

export type TOCProps = {
  readonly headings: readonly MarkdownRightTableOfContents[];
};

export interface MarkdownRightTableOfContents {
  readonly value: string;
  readonly id: string;
  readonly children: MarkdownRightTableOfContents[];
}

const LINK_CLASS_NAME = "table-of-contents__link";
const ACTIVE_LINK_CLASS_NAME = "table-of-contents__link--active";
const TOP_OFFSET = 100;

  // Usage be like:
  //   <TOC
  //   headings={[
  //     { value: "analysing", id: "analyse" },
  //     { value: "ideating", id: "ideate" },
  //     { value: "building", id: "build" },
  //     { value: "evaluating", id: "evaluate" },
  //   ]}
  // />

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({ headings, isChild }: TOCProps & { isChild?: boolean }) {
  if (!headings?.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? "" : "table-of-contents table-of-contents__left-border"
      }
    >
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function TOC({ headings }: TOCProps) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);

  return (
    <div className={"tableOfContents"}>
      <Headings headings={headings} />      
    </div>
  );
}

export default TOC;