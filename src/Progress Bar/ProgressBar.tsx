type Props={
    progress: number;
};

export function ProgressBar({ progress }:Props){
    return<div style = {{flexDirection: 'column', display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
        <div style = {{width: '300px', backgroundColor: "gray", height: '10px',borderRadius: '6px',overflow: 'hidden'}}>
            <div style = {{width: progress.toString().concat('%'), backgroundColor: "blue", height: '100%', transition: 'all'}} />
        </div></div>;
}