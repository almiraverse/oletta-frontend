import React from 'react'

export default function AccountSetup() {
    return (
        <div>
            <form className="setup-form">
                <div>
                    <label>Name</label>&nbsp;
                    <input
                        type='text'
                        name='name'
                    />
                </div>


                <div>
                    <label>Email</label>&nbsp;
                    <input
                        type='email'
                        name='email'
                    />
                </div>


                <div>
                    <label>Gender</label>&nbsp;
                    <input type="radio"
                        value="Male"
                        name="gender" /> Male

                    <input type="radio"
                        value="Female"
                        name="gender" /> Female
                </div>

            </form>
        </div>
    )
}
