import Base from '../utils/StoreBase';

class FansBase extends Base {
    constructor(name){
        super(name);
    }
}

var FansManager = new FansBase('fans');

export default FansManager;
