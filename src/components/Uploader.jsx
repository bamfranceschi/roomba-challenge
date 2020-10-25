import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
// import styled from "styled-components";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Uploader({ setJsonUpload, uploadSuccess, setUploadSuccess }) {
  const [fileUpload, setFileUpload] = useState([]);
  const [uploadFailure, setUploadFailure] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => setUploadFailure(false);
        reader.onload = () => {
          const fileData = JSON.parse(reader.result);
          setJsonUpload(fileData);
          setUploadSuccess(true);
        };
        reader.readAsText(file);
      });

      setFileUpload(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setJsonUpload]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: "application/json",
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const acceptedFileItem = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFileItem = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  useEffect(
    () => () => {
      // revoke the data uris to avoid memory leaks
      fileUpload.forEach((f) => URL.revokeObjectURL(f.preview));
      setUploadSuccess(false);
      setUploadFailure(false);
    },
    [fileUpload]
  );

  return (
    <div {...getRootProps}>
      <input {...getInputProps({ style })} />

      <p>Only JSON files, please, and max one per upload.</p>

      {uploadSuccess === true ? (
        <div>
          <p>Successful upload</p> <h4>Accepted file</h4>
          <ul>{acceptedFileItem}</ul>
        </div>
      ) : (
        <> </>
      )}
      {uploadFailure ? (
        <div>
          <p>Upload unsuccessful</p>
          <h4>Rejected file</h4>
          <ul>{rejectedFileItem}</ul>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Uploader;
