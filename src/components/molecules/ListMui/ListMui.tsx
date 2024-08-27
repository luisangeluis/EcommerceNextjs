import styles from "./ListMui.module.scss";
//COMPONENTS
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

interface ListMuiProps{
  label:string,
  items:any[],
  value:string,
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ListMui:React.FC<ListMuiProps>=({label,items,value,onChange})=>{
  return (
    <section className={styles.listContainer}>
      <FormControl className={styles.list}>
        <p>{label}</p>
        <RadioGroup
          row={false}
          aria-labelledby={label}
          name={label}
          value={value}
          onChange={onChange}
          className={styles.listOptions}
        >
          {
            items?.map((e,i)=>{
              return(
                <FormControlLabel 
                  key={i}
                  value={e.id}
                  control={<Radio className={styles.listOption}/>}
                  label={e.name}
                />
              )
            })
          }
        </RadioGroup>
      </FormControl>
    </section>
  )
}

export default ListMui