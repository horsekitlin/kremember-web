import classNames from 'classNames';

export default class Table extends React.Component{
    constructor(){
        super();
    }
    render(){
        var classes = {
            "table" : true,
            'table-striped': this.props.striped,
            'table-bordered': this.props.bordered,
            'table-condensed': this.props.condensed,
            'table-hover': this.props.hover,
            'table-center' : this.props.center
        };

        return (<table
            {...this.props}
            className={classNames(this.props.className, classes)}>
            {this.props.children}
            </table>);
    }
}
