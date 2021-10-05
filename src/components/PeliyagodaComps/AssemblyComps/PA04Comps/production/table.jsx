import React, { Component } from 'react';

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr>
                {/* <td>
                    {this.props.obj._id}
                </td> */}
                <td>
                    {this.props.obj.Time_from}
                </td>
                <td>
                    {this.props.obj.Time_to}
                </td>
                <td>
                    {this.props.obj.Production_Plan_Quantity}
                </td>
                <td>
                    {this.props.obj.Cummilative_Plan_Quantity}
                </td>
                <td>
                    {this.props.obj.Final_Output}
                </td>
                <td>
                    {this.props.obj.Cummilative_Output}
                </td>
                <td>
                    {this.props.obj.Tube_Rejection}
                </td>
                <td>
                    {this.props.obj.Tip_Rejection}
                </td>
                <td>
                    {this.props.obj.Ink_Rejection}
                 </td>

           </tr>
         );
     }
}

export default DataTable;