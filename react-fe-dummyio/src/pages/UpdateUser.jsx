import React from 'react'

const UpdateUser = () => {
  return (
    <div>
      <h1>Edit User</h1>
        {/* id, title, firstname, lastname, picture */}
      <form>
        <table>
            <tr>
                <td>
                    <label htmlFor="title">Title</label>
                </td>
                <td>
                    <input type="text" id='title' placeholder='your title'/>
                </td>
            </tr>
            <tr>
                <td>
                <label htmlFor="firstName">First Name</label>
                </td>
                <td>
                    <input type="text" id='firstName' placeholder='your first name'/>
                </td>
            </tr>
            <tr>
                <td>
                <label htmlFor="lastName">Last Name</label>
                </td>
                <td>
                    <input type="text" id='lastName' placeholder='your last name'/>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="title">Title</label>
                </td>
                <td>
                    <input type="text" id='title' placeholder='your title'/>
                </td>
            </tr>
            <tr>
                <td>
                <label htmlFor="picture">Picture</label>
                </td>
                <td>
                    <input type="text" id='picture' placeholder='picture url'/>
                </td>
            </tr>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateUser
