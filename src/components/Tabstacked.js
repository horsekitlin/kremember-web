import classNames from 'classnames';

export default class Tabs extends React.Component {
    render(){
        const classes = {
            "nav" : this.props.Nav,
            "nav-pills"  : this.props.Pills,
            "nav-tabs" : this.props.Tabs,
            "nav-stacked" : this.props.Stacked
        };
        return(
            <ul className={classNames(this.props.className, classes)}>
                {this.props.children}
            </ul>
        );
    }
}
Tabs.defaultProps = {
    Pills : false,
    Stacked : false,
    Tabs : false,
    className : 'nav'
};
Tabs.propTypes = {
    className : React.PropTypes.string,
    Pills : React.PropTypes.bool,
    Stacked : React.PropTypes.bool
};

