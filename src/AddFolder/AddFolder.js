import React from 'react'

export default class Addfolder extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="AddFolderform">
                <form onSubmit={() => this.props.Addfolder}>
                    <label htmlFor="addfoldername"> Add folder name </label>
                        <input type="text" id="addfoldername" name="addfoldername" 
                            value={this.props.newFolderName}
                            onChange={e => this.props.updateNewFolder}
                        ></input>
                    <button type="submit">Add Folder</button>
                </form>

            </div>
        )
    }



}