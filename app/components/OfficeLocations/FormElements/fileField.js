import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { List, fromJS, toJS } from 'immutable'
import { Prompt } from 'react-router-dom';
import styles from "../styles.scss";

class FileField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileName: undefined
        }
    }

    readFile = (retrievedFile) => {
        let file = retrievedFile;
        let reader = new FileReader();
        reader.onload = (evt) => {
            let resultText = evt.target.result;
            let fileName = file.name
            this.setState({ fileName:fileName })
            let objects = this.csvToJson(resultText);
        };
        let newFile = file.slice(0,5000);
        reader.readAsText(newFile);
    }

    csvToJson = (csvString) => {
        let {input: {onChange, onBlur, value}} = this.props;
        let Converter = require("csvtojson").Converter;
        let converter = new Converter({});
        converter.fromString(csvString, ((err,result) => {
            onBlur(fromJS(result))
            onChange(fromJS(result));
            //return result;
        }));
    }

    handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
        let eventOrValue = e;
        let {input: {onChange, onBlur}} = this.props;
        if (e.type === 'drop' || 'change') {
            if (acceptedFiles.length > 1) {
                window.alert("Please upload one file at a time")
            } else if (acceptedFiles[0]) {
                let choose = window.confirm('This will overwrite existing entries. Do you want to go ahead?')
                if (choose == true) {
                    let uploadedFile = this.readFile(acceptedFiles[0])
                } else {
                    return
                }
            } else {
                eventOrValue = null;
            }
        }
        onBlur(eventOrValue);
        onChange(eventOrValue);
    }


  render() {
    let {input, meta: {touched, error, pristine, dirty}} = this.props;
    let {accept, multiple} = this.props;
    let selectedFile = (input && input.value) || null;
    let dropzoneProps = {
      accept,
      multiple,
      className: styles.dropzone,
      onDrop: this.handleDropOrClick,
    };
    return (
      <div>
        <input type='hidden' disabled {...input} />
        <Dropzone {...dropzoneProps} >
            {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                if (isDragActive) {
                  return "This file is authorized";
                }
                if (isDragReject) {
                  return "This file is not authorized";
                }
                return (
                    <div className = {styles.dropzoneDialog}>
                        <div className = {styles.dropzoneDialogCell}>
                        {acceptedFiles.length || this.state.fileName
                            ? <p>{this.state.fileName}</p>
                            : <div>
                                <p>Try dropping a file here, or click this area to select a file to upload.</p>
                                <p>Only .csv's will be accepted</p>
                              </div>
                        }
                        </div>
                    </div>
                )
            }}
        </Dropzone>

      </div>
      );
  }
}

export default FileField
