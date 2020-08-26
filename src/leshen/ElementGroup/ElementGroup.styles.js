import styled from '@emotion/styled'

/* TODO: resolve emotions "":first-child is potentially unsafe" issue.
 ** Check for updates to this Github issue: https://github.com/emotion-js/emotion/issues/1105#issuecomment-491304409
 ** And this issue for more explanation of the problem: https://github.com/emotion-js/emotion/issues/1178
 */
export const ElementGroup = styled('div')`
  display: inline-flex;

  > button {
    margin: 0;
  }

  > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  > button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`
