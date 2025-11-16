interface MajorCredits {
_majorBrand: "MajorCredits";
credits:number
}
interface MinorCredits{
    _minorBrand: "MinorCredits";
    credits:number

}
export const sumMajorCredits=function(subject1:MajorCredits,subject2:MajorCredits){
    return {
        credits:subject1.credits+subject2.credits,
    _majorBrand: "MajorCredits"}

}
export const sumMinorCredits=function (
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits",
  };
}