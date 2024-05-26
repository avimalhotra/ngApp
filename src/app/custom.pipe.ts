import { Pipe, PipeTransform } from '@angular/core';
    
@Pipe({
    standalone:true,
    name: 'custom'
})
    
export class CustomPipe implements PipeTransform {
        
transform(x: string): string {
    return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();
} 

} 
