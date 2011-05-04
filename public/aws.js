var profile = function() {
    this.AWS = {
        EC2: {
            Instance: function(name) {
                this.name = name;
                this.AvailabilityZone = '';
                this.DisableApiTermination = '';
                this.ImageId = '';
                this.KernelId = '';
                this.KeyName = '';
                this.Monitoring = '';
                this.PlacementGroupName = '';
                this.PrivateIpAddress = '';
                this.RamDiskId = '';
                this.SecurityGroups = ['AWS::EC2::SecurityGroup'];
                this.SubnetId = '';
                this.Tags = ['AWS::EC2::Tags'];
                this.UserData = '';
                this.Volumes = ['AWS::EC2::MountPoin'];
                this.Description = '';
                this.meta = {
                    required: ['PlacementGroupName']
                };
            },
            SecurityGroup: function(name) {
                this.name = name;
                this.SecurityGroupIngress = 'AWS::EC"::SecurityGroupRole?';
                this.GroupDescription = '';
                this.Description = '';
                this.meta = {
                    required: ['GroupDescription']
                };
            },
            EIP : function(name) {
                this.name = name;
                this.Description = '';
                this.meta = {
                    required: []
                };
            }
        }
    }
};