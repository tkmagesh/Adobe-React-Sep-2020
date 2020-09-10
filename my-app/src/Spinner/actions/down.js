function down(delta){
    const down_action = { type : 'DOWN', payload : delta };
    return down_action;
}
export default down;