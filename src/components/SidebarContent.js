import MaterialTitlePanel from './material_title_panel';
import websetting from '../../config';

const styles = {
    sidebar: {
        width: 256,
        height: '100%',
    },
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};

const SidebarContent = (props) => {
    const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
    const client = websetting.client;
    return (
        <MaterialTitlePanel title="Menu" style={style}>
            <div style={styles.content}>
                <a key='member' href={`${client}/#/home`} style={styles.sidebarLink}>會員資料</a>
                <a key='notification' href={`${client}/#/notification`} style={styles.sidebarLink}>推播功能</a>
                <a key='advert' href={`${client}/#/advert`} style={styles.sidebarLink}>上傳廣告</a>
                <a key='syspost' href={`${client}/#/syspost`} style={styles.sidebarLink}>公告</a>
                <a key='feedback' href={`${client}/#/service`} style={styles.sidebarLink}>客服</a>
            </div>
        </MaterialTitlePanel>
    );
};

export default SidebarContent;
