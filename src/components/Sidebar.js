import { Link } from 'react-router';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';
import MaterialTitlePanel from './material_title_panel';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 0,
  },
  content: {
    padding: '16px',
  },
};
export default class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.onSetOpen = this.onSetOpen.bind(this);
        this.menuButtonClick = this.menuButtonClick.bind(this);
        this.state = {
            docked: true,
            open: false,
            transitions: true,
            touch: true,
            shadow: true,
            pullRight: false,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
        };
    }
    onSetOpen(open) {
        this.setState({open: open});
    }
    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    }
    render(){
        const sidebar = <SidebarContent />;

        const contentHeader = (
            <span>
                {!this.state.docked &&
                <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>}
                <span> React Sidebar</span>
            </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            touch: this.state.touch,
            shadow: this.state.shadow,
            pullRight: this.state.pullRight,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };

        return (
            <Sidebar {...sidebarProps}>
                <MaterialTitlePanel title={contentHeader}>
                    <div style={styles.content}>
                    </div>
                </MaterialTitlePanel>
            </Sidebar>
        );
    }
}
