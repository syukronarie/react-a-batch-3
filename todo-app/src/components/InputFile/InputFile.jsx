/* eslint-disable no-array-constructor */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { validatePdfExtension } from "../../utils/helpers";

const InputFile = () => {
	const navigate = useNavigate();

	const handleInputImageFile = (e) => {
		console.log(e.target.files[0]);
		let _size = e.target.files[0].size;
		let fSExt = new Array("Bytes", "KB", "MB", "GB"),
			i = 0;
		while (_size > 900) {
			_size /= 1024;
			i++;
		}
		const exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
		console.log("FILE SIZE = ", exactSize);
		alert(exactSize);
	};

	const handleInputPdfFile = (e) => {
		const validated = validatePdfExtension(e.target.files[0]);
		alert(validated);
	};

	const [redirect, setRedirect] = useState(false);

	return (
		<div>
			<form>
				<input
					type="file"
					name="file"
					onChange={handleInputImageFile}
					placeholder="input image"
				/>
				<input
					type="file"
					name="file"
					onChange={handleInputPdfFile}
					placeholder="input pdf"
				/>
			</form>
			<Link to="/inputfile">
				<button>Go To Input File </button>
			</Link>
			{redirect && <Navigate to="/inputfile" replace={true} />}
			<button onClick={() => setRedirect(true)}>redirect</button>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
};

export default InputFile;
