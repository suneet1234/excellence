QS NO. 1 : -  <script>
    function EvenNumbers() {
        var a = [1, 2, 3, 4, 5, 6];

        for (var i = 0; i < a.length; i++) {
            if (a[i] % 2 === 0) {
                document.write(a[i]);
            }
        }
    }

EvenNumbers();
</script >

    OUTPUT: - 2, 4, 6


QS N0. 2: -                const arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
                              MaxConsecutiveOnes = (arr = []) => {
                                                            let left = 0;
                                                            let right = 0;
                                                             let max = 0;
                                                     while (right < arr.length) {
                                                     if (arr[right] === 0) {
                                                     if (right - left > max) {
                                                      max = right - left
                                                           };
                                                         right++;
                                                       left = right;
                                                       } else {
                                                       right++
                                                          };
                                                         };
                                               return right - left > max ? right - left : max;
                                               }
                                          console.log(MaxConsecutiveOnes(arr));

       OUTPUT :-    3    
       
       QS Node.3:-    
                      <script>
                             function RepeateElement(arr, low, high) 
                               {
                                  if (low > high) return -1;
                                  
                                    var mid = parseInt((low + high) / 2);
                                     if (arr[mid] != mid + 1) {
                                         if (mid > 0 && arr[mid] == arr[mid - 1]) return mid;

                                            return RepeateElement(arr, low, mid - 1);

                                          }
                                          return RepeateElement(arr, mid + 1, high);
                                       } 

                               var arr = [1, 2, 3, 3, 4, 5,6,6,7,8,9,10,11,11,12,14,98,98,100,101];

                                var n = arr.length;

                                   var index = RepeateElement(arr, 0, n - 1);

                                   if (index != -1) document.write(arr[index]);

                                  </script>


   QS No.4:-                   import React, { useEffect, useState } from 'react';
                               import {  Text, View } from 'react-native';
   
                               export default Fun = () => {
                               const [isLoading, setLoading] = useState(true);
                               const [data, setData] = useState([]);
                               console.log(data);
   
                            useEffect(() => {
                              fetch('https://www.example.com/api/get/1 ')
                             .then((response) => response.json())
                             .then((json) => setData(json))
                              .catch((error) => console.error(error))
                             .finally(() => setLoading(false));
                          }, []);
   
                        return (
   
                       <View style={{ flex: 1, padding: 24 }}>
         
                       <View style={{ flex: 1}}>
                       <Text style={{ fontSize: 18}}>{data.Domain}</Text>
                       {/* <Text style={{ fontSize: 14}}>Articles:</Text>
                     <FlatList
                      data={data.articles}
                       keyExtractor={({ id }, index) => id}
                          renderItem={({ item }) => (
                          <Text>{item.id + '. ' + item.title}</Text>
                      )}
                  /> */}
                      </View>
                    )}
                   </View>
                 );
                };






       QS Node.5:-                          var obj = {
                                              “id” : 4, “name” : “abc”,
                                               “id” : 10, “name” : “ab2”,
                                                “id” : 5, “name” : “abc3”,
                                                “id” : 6, “name” : “abc5”
                                                }
       
                                     ObjSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
                                           console.log(ObjSorted);

                                   OUTPUT :- abc,abc3,abc5,abc2.        