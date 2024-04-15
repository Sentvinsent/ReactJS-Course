"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState();
  const imageInput = useRef();

  function handlePick() {
    imageInput.current.click();
  }
  function handleImgChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImg && <p>No image picked</p>}
          {pickedImg && (
            <Image src={pickedImg} alt="Image picked by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImgChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
