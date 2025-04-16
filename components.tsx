import styled from "@emotion/styled"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
  background: azure;
`

export const Link = styled.a`
  padding: 0.25rem;
  color: cornflowerblue;
`

export const QueueButton = styled.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) =>
    props.disabled
      ? "var(--token-bg-composer-button)"
      : "var(--token-bg-inverse)"};
  color: ${(props) =>
    props.disabled ? "var(--token-text-primary)" : "var(--token-text-inverse)"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  //border: 0;
  background: white;
`
