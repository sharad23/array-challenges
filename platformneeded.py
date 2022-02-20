# Program to find minimum number of platforms
# required on a railway station
 
# def findPlatform(arr, dep, n):
#     '''
#     Accepts two arrays with arrival and departure time
#     and the size of the array
#     Returns minimum number of platforms required
#     '''
 
#     # plat_needed indicates number of platforms
#     # needed at a time
#     plat_needed = 1
#     result = 1
 
#     # run a nested loop to find overlap
#     for i in range(n):
#         # minimum platform needed
#         plat_needed = 1
 
#         for j in range(i+1, n):
#             # check for overlap
#             if ((arr[i] >= arr[j] and arr[i] <= dep[j]) or
#                     (arr[j] >= arr[i] and arr[j] <= dep[i])):
#                 plat_needed += 1

#         print('**********')
#         print(plat_needed)
#         # update result
#         result = max(result, plat_needed)
 
#     return result
 
# # Driver code
 
 
# def main():
#     arr = [940, 950, 1125, 1500, 1800]
#     dep = [1200, 1120, 1130, 1900, 2000]
 
#     n = len(arr)
 
#     print("Minimum Number of Platforms Required = {}".format(
#         findPlatform(arr, dep, n)))
 
 
# if __name__ == '__main__':
#     main()



# Program to find minimum
# number of platforms
# required on a railway
# station
 
# Returns minimum number
# of platforms required
 
 
def findPlatform(arr, dep, n):
 
    # Sort arrival and
    # departure arrays
    arr.sort()
    dep.sort()
 
    # plat_needed indicates
    # number of platforms
    # needed at a time
    plat_needed = 1
    result = 1
    i = 1
    j = 0
 
    # Similar to merge in
    # merge sort to process
    # all events in sorted order
    while (i < n and j < n):
 
        # If next event in sorted
        # order is arrival,
        # increment count of
        # platforms needed
        if (arr[i] <= dep[j]):
 
            plat_needed += 1
            i += 1
 
        # Else decrement count
        # of platforms needed
        elif (arr[i] > dep[j]):
 
            plat_needed -= 1
            j += 1
 
        # Update result if needed
        if (plat_needed > result):
            result = plat_needed
 
    return result
 
# Driver code
 
 
# arr = [940, 950, 1125, 1500, 1800]
# dep = [1200, 1120, 1130, 1900, 2000]
arr = [800, 815, 910]
dep = [900, 1015, 1000]

n = len(arr)
 
print("Minimum Number of Platforms Required = ",
      findPlatform(arr, dep, n))
 
# This code is contributed
# by Anant Agarwal.