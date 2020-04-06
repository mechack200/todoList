import React from 'react';
import './formInput.component.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{/* this means if a developer put a label then create create a label with tha proper else render null */}
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
