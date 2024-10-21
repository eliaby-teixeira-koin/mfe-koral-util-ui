import { SelectContainer, Option }  from './styles';
import { SelectProps } from './props';

export function Select({
   onChange,
   selectList = [],
}: SelectProps) {
   return (
      <SelectContainer
         name="buttons"
         id="button-select"
         onChange={onChange}
      >
         {selectList.map(item => (
           <Option value={item.key} key={item.key}>{item.value}</Option>
         ))}   
      </SelectContainer>
   )
}