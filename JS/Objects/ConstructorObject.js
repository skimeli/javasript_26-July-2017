/**
 * Created by skimeli on 7/26/17.
 */
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e=new emp(103,"Millie Eva",390000);

document.write(e.id+" "+e.name+" "+e.salary);  
