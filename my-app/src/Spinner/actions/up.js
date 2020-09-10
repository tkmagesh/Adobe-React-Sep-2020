function up(delta){
    const up_action = { type : 'UP', payload : delta };
    return up_action;
}
export default up;