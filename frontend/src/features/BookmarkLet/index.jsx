import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Container } from "reactstrap";

const BookmarkLet = () => {
  const [copied, setCopied] = useState(false);
  const [checkCopy, setCheckCopy] = useState(false);
  const [value, setValue] = useState("");
  const [valueInBoard, setValueInBoard] = useState("");

  useEffect(() => {
    const copiedTimeOut = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 2000);
    return () => {
      clearTimeout(copiedTimeOut);
    };
  }, [copied]);

  const copyText = (vl, rs) => {
    if (!value) return;
    setCheckCopy(rs);
    setValueInBoard(vl);
    setCopied(true);
    setValue("");
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h3>This is bookmarklet code</h3>
        {checkCopy && (
          <a
            className="btn btn-outline-success my-2"
            href={`javascript:(function(){${valueInBoard}})()`}
          >
            Demo bookmark drag
          </a>
        )}

        <textarea
          className="form-control"
          rows="10"
          value={value}
          placeholder="Write code here"
          onChange={(e) => {
            setValue(e.target.value);
            setCopied(false);
          }}
        ></textarea>

        <CopyToClipboard text={value} onCopy={copyText}>
          <button className="btn btn-outline-secondary my-3">Copy</button>
        </CopyToClipboard>
        {copied ? <p className="text-danger">Copied.</p> : null}
      </div>
    </Container>
  );
};

BookmarkLet.propTypes = {};

export default BookmarkLet;
