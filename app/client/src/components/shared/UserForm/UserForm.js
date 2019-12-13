import React from 'react';


const UserForm = props =>{
    return(<form onSubmit={props.onSubmit}>
        <h2>{props.title}</h2>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={props.mypros.name} onChange={props.nameChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" value={props.mypros.email}  onChange={props.emailChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={props.mypros.password} onChange={props.passwordChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input type="password" className="form-control" name="password_confirmation"  value={props.mypros.password_confirmation} onChange={props.passwordConfirmationChange}/>
        </div>
       <button type="submit">{props.title} </button>
    </form>)
}

export default UserForm;