import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const baseStyle = {
  display: "flex",
  justifyContent: "center",
  marginLeft: "30px",
  padding: "20px",
  borderColor: "#eeeeee",
  border: "2px",
  borderStyle: "dashed",
  color: "#bdbdbd",
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

const UploadDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FileDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function Uploader({ setJsonUpload, uploadSuccess, setUploadSuccess }) {
  const [fileUpload, setFileUpload] = useState([]);
  const [uploadFailure, setUploadFailure] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => setUploadFailure(true);
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
        <UploadDisplay>
          <h3>Successful upload!</h3>
          <FileDisplay>
            <h4>Accepted file</h4>
            <ul>{acceptedFileItem}</ul>
          </FileDisplay>
        </UploadDisplay>
      ) : (
        <> </>
      )}
      {uploadFailure ? (
        <UploadDisplay>
          <h3>Upload unsuccessful</h3>
          <h4>Rejected file</h4>
          <ul>{rejectedFileItem}</ul>
        </UploadDisplay>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Uploader;
