/**
 * Created by why on 2017/8/15.
 */


module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    game:(req,res)=>{
        res.render('game/tetris');
    }
};
