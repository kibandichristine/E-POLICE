# PMS
- PMS (Precinct Management System) is an API for managing day to day activities in a police station. Currently the dataset being used is of Kenya Police Service. More Police Stations around the world will be supported in the future

# Data Modelling
## Main entities
1. Officer
2. Complainant
3. Address
4. Lawyer
5. Suspect
6. Complaint
7. Most Wanted
8. Missing Person
9. Shift
10. DayOff
11. LastSeen
12. Detective

## Statements
1. An officer can record many complaints and a complaint can be recorded by only one officer
2. An officer can have only one address and an address can belong to only one officer
3. A complainant can have many complaints and a complaint can belong to only one complainant
4. A suspect can be recorded in many complaints and a complaint can have many suspects
5. A suspect can be tagged as most wanted and most wanted tag can be applied to more than one suspect
6. A suspect can have one lawyer and a lawyer can have many suspects
7. A most wanted case can be claimed by one bounty hunter a bounty hunter can claim many most wanted bounties
8. An officer can have many shifts and a shift can belong to only one officer
9. An officer can have many dayoffs and a day off can belong to one officer
10. A complaint can be tagged as a missing person case and missing persons case can be applied to more than one complaint
11. A complaint can be investigated by one detective and a detective can work on one complaint
12. A most wanted suspect can be spotted many times and each spot can have many most wanted suspects
13. A missing person can be spotted many times and each spot can have many most wanted suspects
14. A detective can handle multiple complaints and a complaint can belong to only one detective
15. A detective can only belong to general duty command (detective) and a general duty command can only belong to one detective

# Relationships
1. officer to complaint - many to one
2. officer to address - one to one
3. complainant to complaint - many to one
4. suspect to complaint - many to many
5. suspect to most wanted - one to many
6. suspect to lawyer - one to many
7. officer to shift - many to one
8. officer to dayoff - many to one
9.  complaint to missings person - one to many
10. detective to complaints - many to one
11. 

# Others / TODO
1. Count the number of:
   - [] complaints recorded by an officer
   - [] suspects in a complaint
   - [] most wanted suspects in a complaint
   - [] shifts done by an officer
   - [] dayoff taken by an officer
   - [] missing persons in a complaint
   - [] Total most wanted suspects
   - [] Total missings persons
   - [] Total complaints
   - [] Total complainants
   - [] Total officers
   - [] Total suspects


# Setting up the environment
1. Install pipenv
```bash
pip3 install pipenv
```
1. Clone the github repository
```bash
git clone https://github.com/Elias-Yona/Police-Station-Management-System.git
```
1. Create virtual environment
```bash
cd Police-Station-Management-System
pipenv install
source $(pipenv --venv)/bin/activate
```

# Database interaction
- Inorder to interact with the database easily, download a database GUI client such as `DataGrip` or `DBeaver`
- Run `seed.sql` located in the Data folder using the GUI client

# Creating admin
```bash
python manage.py createsuperuser
```

# Endpoints
# A) Officers
## 1. Return all officers
```
http://localhost:8000/precinct/officers/
```
## 2. Return a particular officer
```
http://localhost:8000/precinct/officers/3
```

# B) Complaints
## 1. Return all Complaints
```
http://localhost:8000/precinct/complaints/
```
## 2. Return a particular complaint
```
http://localhost:8000/precinct/complaints/3
```

# C) Suspects
## 1. Return all Suspects
```
http://localhost:8000/precinct/suspects/
```
## 2. Return a particular suspect
```
http://localhost:8000/precinct/suspects/3
```

# D) Complainants
## 1. Return all Complainants
```
http://localhost:8000/precinct/complainants/
```
## 2. Return a particular complainant
```
http://localhost:8000/precinct/complainants/3
```

# B) Complaints
## 1. Return all Complaints
```
http://localhost:8000/precinct/complaints/
```
## 2. Return a particular complaint
```
http://localhost:8000/precinct/complaints/3
```

# E) Reports
## 1. Return all Reports
```
http://localhost:8000/precinct/reports/
```
## 2. Return a particular report
```
http://localhost:8000/precinct/reports/3
```

# F) Lawyers
## 1. Return all lawyers
```
http://localhost:8000/precinct/lawyers/
```
## 2. Return a particular lawyer
```
http://localhost:8000/precinct/lawyers/3
```

# G) AUTHENTICATION
- Inorder to play with the authentication system easily please install `Modheader` extension from the playstore

## 1. Login - Returns an access token and a refresh token
```
http://localhost:8000/auth/jwt/create
```

## 2. Generate a new access token
```
http://localhost:8000/auth/jwt/refresh
```



